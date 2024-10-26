import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text  */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Car Racing</span>
            <h1 className="h1 mb-6">
              Welcome to <br />{" "}
              <span className="text-accent capitalize">car racing</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              laboriosam error doloribus id unde omnis.
            </p>
            {/* btn and socials  */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* button  */}
              <Link href="/register">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                Registration
              </Button>
              </Link>
              {/* socials  */}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          {/* photo  */}
          <div className="">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
