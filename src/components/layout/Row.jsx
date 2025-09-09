import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Row = () => {
    return (
            <div className="flex gap-x-2.5">

                {/* Hours */}
                <div className="flex justify-between items-center gap-x-1.5">
                    <div className="max-w-[50px]">
                        <Input type={"text"} />
                    </div>
                    <div>
                        <Label>H</Label>
                    </div>
                </div>
                {/* Minutes */}
                <div className="flex justify-between items-center gap-x-1.5">
                    <div className="max-w-[50px]">
                        <Input type={"text"} />
                    </div>
                    <div>
                        <Label>M</Label>
                    </div>
                </div>
                {/* Seconds */}
                <div className="flex justify-between items-center gap-x-1.5">
                    <div className="max-w-[50px]">
                        <Input type={"text"} />
                    </div>
                    <div>
                        <Label>S</Label>
                    </div>
                </div>
            </div>
    )
}

export default Row;