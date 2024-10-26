import { FaGears } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function CustomOrder() {
  return (
    <div className="w-full h-[500px] py-16 my-10 lg:my-20">
      <div className="container mx-auto">
        <h2 className="h2 flex gap-3">
          <span>
            <FaGears className="text-accent font-semibold" />
          </span>
          Custom
        </h2>
        <form onSubmit={(e)=>e.preventDefault()} className="max-w-full h-auto my-10">
            <div className="min-w-full h-auto mb-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-10">
            <Input name="Tires" />
            <Input name="Axis of Balance" />
            <Input name="Engine" />
            <Input name="Chassis" />
            </div>
            {/* button  */}
            <Button
                variant="outline"
                size="lg"
                className="uppercase max-w-[200px]"
              >
                Save changes
              </Button>
        </form>
      </div>
    </div>
  );
}

export default CustomOrder;
