import { TabsContent } from "@/components/ui/tabs"
import { infoData } from "@/lib/constants"
import Link from "next/link"

const InfoTab = () => {
  return (
    <TabsContent value="personal">
      <div className="rounded-xl bg-orange-200/30 p-4 text-center backdrop-blur-lg backdrop-filter dark:bg-indigo-950/40 lg:text-left">
        <h3 className="mb-4 text-2xl font-bold">
          I am a full-stack software developer
        </h3>
        <p className="subtitle w-full">
          I like to design and develop websites with cutting-edge technologies,
          delivering dynamic and engaging user experiences.
        </p>
        <div className="grid w-full grid-cols-1 gap-8 xl:grid-cols-2">
          {infoData.map((item, idx) => (
            <div
              key={idx}
              className="mx-auo flex w-full items-center gap-4 max-xl:justify-center"
            >
              <div className="text-primary">{item.icon}</div>
              {item.text === "tuan.nat915@gmail.com" ? (
                <Link
                  href="mailto:tuan.nat915@gmail.com?subject=Contact from your Portfolio"
                  className="hover:text-primary"
                >
                  <p>{item.text}</p>
                </Link>
              ) : (
                <p>{item.text}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 flex w-full flex-col gap-2 max-xl:items-center max-xl:justify-center">
          <p className="text-primary">Language</p>
          <div className="border-b border-border"></div>
          <p>English, Vietnamese</p>
        </div>
      </div>
    </TabsContent>
  )
}

export default InfoTab
