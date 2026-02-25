import { useStore } from "@/store/store";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ShoppingCartIcon } from "./ui/shopping-cart";
import { XCircleIcon } from "./ui/x-circle";
import { useShallow } from "zustand/shallow";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TrashIcon } from "./ui/trash";
import ChangeQtyBtn from "./ChangeQtyBtn";

const Cart = () => {
  const { reset, products, removeProduct, total, address } = useStore(
    useShallow((state) => ({
      reset: state.reset,
      products: state.products,
      removeProduct: state.removeProduct,
      total: state.total,
      address: state.address,
    })),
  );
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="icon">
          <ShoppingCartIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="overflow-y-auto space-y-2 w-96">
        <div className="flex gap-2 text-lg items-center">
          <h1>Cart: </h1>
          <Button variant="destructive" onClick={reset} size="icon">
            <XCircleIcon />
          </Button>
        </div>
        <div className="space-y-2 ">
          {products.map((product) => (
            <Card className="flex flex-col" key={product.id}>
              <CardHeader className="flex flex-row items-center gap-2">
                <CardTitle>{product.title}</CardTitle>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeProduct(product.id)}
                >
                  <TrashIcon />
                </Button>
              </CardHeader>
              <CardContent>{product.price}</CardContent>
              <CardFooter>
                <ChangeQtyBtn productId={product.id} />
              </CardFooter>
            </Card>
          ))}
        </div>
        <p>Total: {total}$</p>
        <p>Address: {address}</p>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
