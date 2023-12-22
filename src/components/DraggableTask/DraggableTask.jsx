/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDrag } from 'react-dnd';
import { useForm } from 'react-hook-form';
import { FiEdit3 } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";
import useAxios from '../../hooks/useAxios';
import toast from 'react-hot-toast';

const DraggableTask = ({ task, refetch }) => {
    const { register, handleSubmit } = useForm()
    const [selectedDate, setSelectedDate] = useState(null)
    const axios = useAxios();

    const [, drag] = useDrag({
        type: 'TASK',
        item: { id: task?._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    const onSubmit = async (data) => {
        const newData = {
            ...data,
            deadline: selectedDate.toString(),
            status: task?.status
        }

        try {

            const res = await axios.put(`/tasks/${task?._id}`, newData);

            if (res?.data?.modifiedCount > 0) {
                toast.success('task updated successfully!');
                refetch()
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    const handleDelete = async () => {
        try {
            const { data } = await axios.delete(`/tasks/${task?._id}`);
            if (data?.deletedCount > 0) {
                toast.success('Task is deleted successfully');
                refetch()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    function toastNotification(taskDeadlineString) {
        const taskDeadline = new Date(taskDeadlineString);
        const now = new Date();

        const timeDifference = taskDeadline - now;

        if (timeDifference > 0) {
            setTimeout(() => {
                showToast();
            }, timeDifference);
        }
    }

    function showToast() {
        toast.success(`${task?.name} has reached the deadline time!`)
    }

    toastNotification('Fri Dec 22 2023 17:05:00 GMT+0600 (Bangladesh Standard Time)');

    return (
        <>
            <div ref={drag} className="flex gap-4 p-4 border rounded-lg">
                <div>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className='bg-[#B33E62] p-2 text-white rounded-md text-xl'><FiEdit3 /></button>
                    <button onClick={handleDelete} className='bg-red-600 p-2 text-white rounded-md text-xl mt-4'><FaTrashAlt /></button>
                </div>
                <div>
                    <h1 className="text-base font-semibold">{task?.name}</h1>
                    <p className="text-sm text-neutral-600">{task?.description}</p>
                    <div className="flex justify-between pt-6">
                        <p className="text-sm">
                            Priority: <span className={`${task?.priority === "High" ? "text-red-600" : task?.priority === "Moderate" ? "text-orange-600" : 'text-green-600'} font-medium`}>
                                {task?.priority}
                            </span>
                        </p>
                        <p className="text-sm">Deadline: <span className="text-red-600 font-medium">{task?.deadline.split(' ').slice(1, 4).join(',')}</span></p>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="modal-action mt-0 mb-6">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <input defaultValue={task?.name} type="text" {...register("name", { required: true })} placeholder="Task name" className="py-3 text-lg text-black font-medium placeholder:text-lg outline-none px-4 w-full" />
                            <textarea defaultValue={task?.description} {...register("description", { required: true })} placeholder="Description" className="py-3 placeholder:text-sm outline-none px-4 w-full" />
                        </div>
                        <hr className="my-2" />
                        <div className="flex items-center gap-4 mb-6">
                            <div>
                                <DatePicker
                                    selected={selectedDate ? selectedDate : task?.date}
                                    onChange={date => setSelectedDate(date)}
                                    minDate={new Date()}
                                    dateFormat="MMM, d,yyyy"
                                    className="py-2 px-4 rounded-md w-40 outline-none"
                                    placeholderText="Select Date"
                                    required
                                />
                            </div>
                            <select {...register("priority", { required: true })} defaultValue={task?.priority} className="select border-none outline-none">
                                <option disabled value='default'>Pick Priority</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn bg-green-600 text-white w-full">Add task</button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default DraggableTask;