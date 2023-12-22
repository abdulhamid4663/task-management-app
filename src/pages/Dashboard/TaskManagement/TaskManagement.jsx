import { FcTodoList } from "react-icons/fc";
import { VscGear } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbPlaylistAdd } from "react-icons/tb";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import useAxios from "../../../hooks/useAxios";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import DraggableTask from "../../../components/DraggableTask/DraggableTask";
import { useDrop } from 'react-dnd';
import useAuth from "../../../hooks/useAuth";

const TaskManagement = () => {
    const { user, loading } = useAuth();
    const axios = useAxios();
    const { register, handleSubmit } = useForm()
    const [selectedDate, setSelectedDate] = useState(null)

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axios.get(`/tasks/${user?.email}`);
            return data;
        }
    })

    const onSubmit = async (data) => {
        const newData = {
            ...data,
            deadline: selectedDate.toString(),
            user: user?.email,
            status: 'todo'
        }
        console.log(newData);

        try {

            const res = await axios.post('/tasks', newData);

            if (res?.data?.insertedId) {
                toast.success('task added successfully!');
                refetch()
            }

        } catch (error) {
            toast.error(error.message);
        }
    }

    const [, dropTodo] = useDrop({
        accept: 'TASK',
        drop: (item) => addTodo(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    const addTodo = async (id) => {
        const updatedTask = {
            status: 'todo'
        }
        const { data } = await axios.patch(`/tasks/${id}`, updatedTask)
        if (data?.modifiedCount > 0) {
            toast.success("Task's status has been changed to todo")
            refetch()
        }
    }

    const [, dropOngoing] = useDrop({
        accept: 'TASK',
        drop: (item) => addToOngoing(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    const addToOngoing = async (id) => {
        const updatedTask = {
            status: 'ongoing'
        }
        const { data } = await axios.patch(`/tasks/${id}`, updatedTask)
        if (data?.modifiedCount > 0) {
            toast.success("Task's status has been changed to ongoing")
            refetch()
        }
    }

    const [, dropCompleted] = useDrop({
        accept: 'TASK',
        drop: (item) => addToCompleted(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });

    const addToCompleted = async (id) => {
        const updatedTask = {
            status: 'completed'
        }
        const { data } = await axios.patch(`/tasks/${id}`, updatedTask)
        if (data?.modifiedCount > 0) {
            toast.success("Task's status has been changed to completed")
            refetch()
        }
    }

    return (
        <>
            <div className="pt-10 pb-32 px-6">
                <div className="pb-10">
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn btn-md text-base md:text-xl bg-[#FBE5E5]">
                        <TbPlaylistAdd className="text-[#B33E62] text-2xl md:text-3xl" />
                        Add Task
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {/* Todo List */}
                    <div>
                        <div className="flex items-center gap-4 pb-6">
                            <FcTodoList className="text-2xl" />
                            <h1>To-Do</h1>
                        </div>
                        <ul className="flex flex-col gap-6 min-h-full lg:min-h-[65vh]" ref={dropTodo}>
                            {
                                tasks?.map(task =>
                                    <div key={task?._id}>
                                        {
                                            task.status === "todo" &&
                                            <DraggableTask task={task} refetch={refetch} />
                                        }
                                    </div>
                                )
                            }
                        </ul>
                    </div>

                    {/* Ongoing List */}
                    <div>
                        <div className="flex items-center gap-4 pb-6">
                            <VscGear className="text-2xl" />
                            <h1>Ongoing</h1>
                        </div>
                        <ul className="flex flex-col gap-6 min-h-full lg:min-h-[65vh]" ref={dropOngoing}>
                            {
                                tasks?.map(task =>
                                    <div key={task?._id}>
                                        {
                                            task.status === "ongoing" &&
                                            <DraggableTask task={task} refetch={refetch} />
                                        }
                                    </div>
                                )
                            }
                        </ul>
                    </div>

                    {/* Completed List */}
                    <div>
                        <div className="flex items-center gap-4 pb-6">
                            <IoIosCheckmarkCircle className="text-2xl text-green-600" />
                            <h1>Completed</h1>
                        </div>
                        <ul className="flex flex-col gap-6 min-h-full lg:min-h-[65vh]" ref={dropCompleted}>
                            {
                                tasks?.map(task =>
                                    <div key={task?._id}>
                                        {
                                            task.status === "completed" &&
                                            <DraggableTask task={task} refetch={refetch} />
                                        }
                                    </div>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>

            {/* Dialog */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="modal-action mt-0 mb-6">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <input type="text" {...register("name", { required: true })} placeholder="Task name" className="py-3 text-lg text-black font-medium placeholder:text-lg outline-none px-4 w-full" />
                            <textarea {...register("description", { required: true })} placeholder="Description" className="py-3 placeholder:text-sm outline-none px-4 w-full" />
                        </div>
                        <hr className="my-2" />
                        <div className="flex items-center gap-4 mb-6">
                            <div>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={date => setSelectedDate(date)}
                                    minDate={new Date()}
                                    dateFormat="MMM, d,yyyy"
                                    className="py-2 px-4 rounded-md w-40 outline-none"
                                    placeholderText="Select Date"
                                    required
                                />
                            </div>
                            <select {...register("priority", { required: true })} defaultValue='default' className="select border-none outline-none">
                                <option disabled value='default'>Pick Priority</option>
                                <option>Low</option>
                                <option>Moderate</option>
                                <option>High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn bg-green-600 text-white w-full">Add task</button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default TaskManagement;