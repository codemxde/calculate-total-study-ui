import Row from "../layout/Row";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useRef, useState } from "react";

const Home = () => {
    const inputRef = useRef(null);
    const [tasks, setTasks] = useState([]);

    const handleClick = () => {
        
        if (inputRef.current.value === null) return;
    }
    return (
        <div className="p-1.5">

            <div className="flex gap-x-3 items-center mt-2">

                <p className="">How many tasks do you have ?</p>

                <div className="max-w-[50px]">
                    <Input ref={inputRef} type={"text"} />
                </div>

                <Button onClick={handleClick}>Add Rows</Button>
            </div>

            <Row />
        </div>
    )
}

export default Home;