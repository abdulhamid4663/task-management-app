import { FcTodoList } from "react-icons/fc";
import { VscGear } from "react-icons/vsc";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { TbPlaylistAdd } from "react-icons/tb";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const TaskManagement = () => {
    const [selectedDate, setSelectedDate] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
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
                        <div className="flex items-center gap-4">
                            <FcTodoList className="text-2xl" />
                            <h1>To-Do</h1>
                        </div>
                        <ul>
                            <li className="flex items-center gap-4 p-4">
                                <input type="checkbox" className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" />
                                <div>
                                    <h1 className="text-base font-semibold">Job Task Programming Hero.</h1>
                                    <p className="text-sm text-neutral-600">This is a Job task from programming hero and the deadline is 22 dec 7:59 PM</p>
                                    <div className="flex justify-between pt-6">
                                        <p className="text-sm">Priority: <span className="text-red-600 font-medium">High</span></p>
                                        <p className="text-sm">Deadline: <span className="text-red-600 font-medium">22 dec</span></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Ongoing List */}
                    <div>
                        <div className="flex items-center gap-4">
                            <VscGear className="text-2xl" />
                            <h1>Ongoing</h1>
                        </div>
                        <ul>
                            <li className="flex items-center gap-4 p-4">
                                <input type="checkbox" className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" />
                                <div>
                                    <h1 className="text-base font-semibold">Job Task Programming Hero.</h1>
                                    <p className="text-sm text-neutral-600">This is a Job task from programming hero and the deadline is 22 dec 7:59 PM</p>
                                    <div className="flex justify-between pt-6">
                                        <p className="text-sm">Priority: <span className="text-red-600 font-medium">High</span></p>
                                        <p className="text-sm">Deadline: <span className="text-red-600 font-medium">22 dec</span></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Completed List */}
                    <div>
                        <div className="flex items-center gap-4">
                            <IoIosCheckmarkCircle className="text-2xl text-green-600" />
                            <h1>Completed</h1>
                        </div>
                        <ul>
                            <li className="flex items-center gap-4 p-4">
                                <input type="checkbox" className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]" />
                                <div>
                                    <h1 className="text-base font-semibold">Job Task Programming Hero.</h1>
                                    <p className="text-sm text-neutral-600">This is a Job task from programming hero and the deadline is 22 dec 7:59 PM</p>
                                    <div className="flex justify-between pt-6">
                                        <p className="text-sm">Priority: <span className="text-red-600 font-medium">High</span></p>
                                        <p className="text-sm">Deadline: <span className="text-red-600 font-medium">22 dec</span></p>
                                    </div>
                                </div>
                            </li>
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
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <input type="text" name="name" placeholder="Task name" className="py-3 text-lg text-black font-medium placeholder:text-lg outline-none px-4 w-full" />
                            <textarea type="text" name="description" placeholder="Description" className="py-3 placeholder:text-sm outline-none px-4 w-full" />
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

                                />
                            </div>
                            <select name="priority" defaultValue='default' className="select border-none outline-none">
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