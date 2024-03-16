"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, User, MessageSquare, ArrowRightIcon } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [sending, setSending] = useState(false)
  const handleOnchange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_API_KEY,
      )
      .then(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        })
        setSending(false)
        toast.success("Message sent!")
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <section className="my-12 lg:my-16">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="container mx-auto flex flex-col gap-12 lg:flex-col">
        {/* GET IN TOUCH */}
        <div className="w-full flex-col gap-10">
          <div className="mb-10 flex w-full items-center justify-center gap-4">
            <div className="h-[2px] w-[50px]  bg-primary sm:w-[150px]"></div>
            <p className="text-2xl text-primary lg:text-4xl">Get in touch 👋</p>
            <div className="h-[2px] w-[50px] bg-primary sm:w-[150px]"></div>
          </div>
          <p className="mx-auto max-w-[800px] text-justify text-lg leading-relaxed text-muted-foreground lg:text-xl">
            I take great pleasure in collaborating with passionate and committed
            individuals who strive to make the world a better place. Their
            dedication and creativity inspire me to push my limits and achieve
            new heights. If you share this vision and would like to work
            together, please don't hesitate to reach out to me. I'm always
            looking for new opportunities to learn and grow.
          </p>
          <h1 className="h1 my-12 mb-6 text-center max-lg:text-center">
            Let's work together
          </h1>
        </div>
        {/* FORM */}
        <div className="flex w-full items-center justify-between gap-8">
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-8">
            <div className="group flex w-full items-center gap-4">
              <User
                className={`${formData.name ? "size-10" : "size-0"} transition-all duration-500 group-hover:size-10`}
              />
              <Input
                className={`${formData.name && "bg-secondary text-lg"}`}
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="off"
                onChange={handleOnchange}
              />
            </div>
            <div className="group flex w-full items-center gap-4">
              <MailIcon
                className={`${formData.email ? "size-10" : "size-0"} transition-all duration-500 group-hover:size-10`}
              />
              <Input
                className={`${formData.email && "bg-secondary text-lg"}`}
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                onChange={handleOnchange}
              />
            </div>
            <div className="group flex w-full items-center gap-4">
              <MessageSquare
                className={`${formData.message ? "size-10" : "size-0"} transition-all duration-500 group-hover:size-10`}
              />
              <Textarea
                rows={6}
                className={`py-4 ${formData.message && "bg-secondary text-lg"}`}
                name="message"
                placeholder="Your Message"
                onChange={handleOnchange}
              />
            </div>

            <Button
              disabled={sending}
              type="submit"
              className={`group w-full items-center justify-center gap-4 ${sending && "cursor-wait opacity-50"}`}
            >
              {sending ? (
                <p className="text-lg font-semibold">Sending ...</p>
              ) : (
                <>
                  <p className="text-lg font-semibold">Let's Talk</p>
                  <ArrowRightIcon className="-rotate-90 transition-all duration-500 group-hover:rotate-0" />
                </>
              )}
            </Button>
          </form>
          <div className="h-[500px] w-full bg-contact_illustration_light bg-right bg-no-repeat dark:bg-contact_illustration_dark max-md:hidden"></div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
