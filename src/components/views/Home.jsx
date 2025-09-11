import axios from "axios";
import Row from "../layout/Row";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { useEffect, useRef, useState } from "react";

const Home = () => {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [trigger, setTrigger] = useState(false);

    const handleClick = () => {
        if (disabled) return;
        if (inputRef.current.value === null) return;

        setCount((count) => count = inputRef.current.value)
        setDisabled((disabled) => disabled = true);
    }

    const handleReset = () => {
        setCount((count) => count = 0);
        inputRef.current.value = null;
        setDisabled((disabled) => disabled = false);
    }

    const handleCalculation = () => {
        setTrigger((trigger) => trigger = true);
    }

    useEffect(() => {
        if (trigger) {
            axios.get(`http://10.120.100.30:8080/total-effort/${2}/${30}`)
                .then((response) => {
                    console.log(`Response Body: ${response}`)
                    return response.data;
                })
                .then((data) => {
                    console.log("Data: " + data)
                })
                .catch((err) => {
                    console.log("Error: " + err)
                })
        }
    }, [trigger])

    return (
        <div className="p-1.5">

            <div className="flex gap-x-3 items-center mt-2">

                <p className="">How many tasks do you have ?</p>

                <div className="max-w-[50px]">
                    <Input ref={inputRef} type={"text"} />
                </div>

                <Button onClick={handleClick} variant={disabled ? "secondary" : "default"} >Add Rows</Button>

                <Button onClick={handleReset} variant={disabled ? "default" : "secondary"}>Reset</Button>
            </div>

            {/* Tasks */}

            <div className="pt-6 pl-3 flex flex-col gap-y-4">
                {   
                    Array.from({ length: count }, (_, i) => (<Row key={i} number={i + 1} />))
                }
            </div>
            
            {/* Calculate Total Effort */}
            {
                count > 0 ? (
                    <div className="mt-6">
                        <Button onClick={handleCalculation} variant="outline">Calculate Effort</Button>
                    </div>
                ) : ""
            }
        </div>
    )
}

export default Home;