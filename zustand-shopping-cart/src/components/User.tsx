import { useStore } from "@/store/store";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useShallow } from "zustand/shallow";
import { UserIcon } from "./ui/user";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useEffect } from "react";

const User = () => {
  const { setAddress, fullName, userName, address, fetchUser } = useStore(
    useShallow((state) => ({
      address: state.address,
      setAddress: state.setAddress,
      fullName: state.fullName,
      userName: state.userName,
      fetchUser: state.fetchUser,
    })),
  );

  useEffect(() => {
    async function fetchData() {
      await fetchUser();
    }

    fetchData();
  }, [fetchUser]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="icon">
          <UserIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="overflow-y-auto space-y-2 w-96">
        <div className="flex items-center gap-2">
          <p>{fullName}</p>
          <p className="text-sm">{userName}</p>
        </div>
        <Label htmlFor="address">Your Address:</Label>
        <Input
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default User;
