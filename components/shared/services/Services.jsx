import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { servicesData } from "@/lib/constants"

const Services = () => {
  return (
    <section className="mt-12 xl:mt-32">
      <div className="mx-auo container">
        <h2 className="section-title mx-auto mb-24 mt-12">My Services</h2>
        <div className="grid justify-center gap-12 xl:grid-cols-3 xl:gap-8">
          {servicesData.map((item, idx) => (
            <Card
              key={idx}
              className="relative flex h-[300px] w-full max-w-[424px] flex-col items-center justify-center pb-10 pt-16 dark:bg-secondary/40"
            >
              <CardHeader className="absolute -top-[64px] text-primary">
                <div className="flex h-[80px] w-[140px] items-center justify-center rounded-xl bg-white dark:bg-background ">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="mb-4 capitalize tracking-[4px]">
                  {item.title}
                </CardTitle>

                <div className="grid grid-cols-2 gap-4 text-start lg:gap-8 mt-6">
                  {item.description.map((item, idx) => (
                    <CardDescription
                      key={idx}
                      className="text-base w-full lg:text-lg lg:font-semibold"
                    >
                      {item}
                    </CardDescription>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
