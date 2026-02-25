import { useStore } from "@/store/store";
import { useShallow } from "zustand/shallow";
import { Button } from "./ui/button";
import { MinusIcon } from "./ui/minus";
import { PlusIcon } from "./ui/plus";
import { useEffect } from "react";

type Props = { productId: string };
const ChangeQtyBtn = ({ productId }: Props) => {
  const { getProductById, decQty, incQty, setTotal } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQty: state.decQty,
      incQty: state.incQty,
      setTotal: state.setTotal,
    })),
  );
  const product = getProductById(productId);

  useEffect(() => {
    const unSub = useStore.subscribe(
      (state) => state.products,
      (products) => {
        setTotal(
          products.reduce((acc, item) => acc + item.price * item.qty, 0),
        );
      },
      { fireImmediately: true },
    );
    return unSub;
  }, [setTotal]);

  return (
    <>
      {product && (
        <div className="flex gap-2 items-center">
          <Button onClick={() => decQty(product.id)} size="icon">
            <MinusIcon></MinusIcon>
          </Button>
          <p>{product.qty}</p>
          <Button onClick={() => incQty(product.id)} size="icon">
            <PlusIcon></PlusIcon>
          </Button>
          {}
        </div>
      )}
    </>
  );
};

export default ChangeQtyBtn;
