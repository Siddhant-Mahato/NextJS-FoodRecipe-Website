import { Skeleton } from "@/components/ui/skeleton";

function loading() {
return (
    <div className="w-full min-h-screen bg-black">
        <Skeleton/>
    </div>
);
}

export default loading;
