import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { skillData } from "@/lib/constants"

const SkillsTab = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title)
  }
  return (
    <TabsContent value="skills">
      <div className="rounded-xl bg-orange-200/30 p-4 text-center backdrop-blur-lg backdrop-filter dark:bg-indigo-950/40 lg:text-left">
        <h3 className="my-8 text-center text-2xl font-bold capitalize">
          Tools I Use everyday
        </h3>
        <div className="flex flex-col gap-4">
          {/* <Tabs defaultValue={getData(skillData, "skills").title}>
            <TabsList className="grid w-full grid-cols-2 rounded-full dark:border-none lg:border">
              <TabsTrigger
                className="flex w-auto items-center justify-center gap-6 capitalize"
                value={getData(skillData, "skills").title}
              >
                {getData(skillData, "skills").title}
              </TabsTrigger>
              <TabsTrigger
                className="flex w-auto items-center justify-center gap-6 capitalize"
                value={getData(skillData, "tools").title}
              >
                {getData(skillData, "tools").title}
              </TabsTrigger>
            </TabsList>
            <TabsContent value={getData(skillData, "skills").title}>
              <div className="mt-4 flex w-full flex-col gap-8">
                {getData(skillData, "skills").data.map((item, idx) => (
                  <p key={idx}>{item.name}</p>
                ))}
              </div>
            </TabsContent>
            <TabsContent value={getData(skillData, "tools").title}>
              <div className="mt-4 flex w-full flex-col gap-8">
                {getData(skillData, "tools").data.map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx}>
                      <Icon size={24} />
                    </div>
                  )
                })}
              </div>
            </TabsContent>
          </Tabs> */}
          <div className="flex w-full flex-col gap-4 border-b border-border p-4">
            <p className="text-xl font-semibold capitalize text-primary">
              {getData(skillData, "skills").title}
            </p>
            <div className="grid w-full grid-cols-2 gap-10">
              {getData(skillData, "skills").data.map((item, idx) => (
                <p key={idx} className="text-muted-foreground">
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <p className="text-xl font-semibold capitalize text-primary">
              {getData(skillData, "tools").title}
            </p>
            <div className="flex items-center justify-between gap-4 lg:justify-evenly lg:gap-16">
              {getData(skillData, "tools").data.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx}>
                    <Icon className="size-8 lg:size-12" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  )
}

export default SkillsTab
