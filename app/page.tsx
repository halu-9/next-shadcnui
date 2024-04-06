import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h2 className="font-medium text-2xl">
          ようこそ！プログラミングチュートリアルへ🚀
        </h2>
        <p className="py-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          provident nulla temporibus rem cumque debitis ipsa modi! Vitae
          sapiente obcaecati molestiae rerum. Magnam aut modi voluptas,
          temporibus quas reiciendis nobis.
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <Button>Click Here</Button>
        <Button>Click Here</Button>
      </div>
    </main>
  );
}
