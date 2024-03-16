import Social from "../Social"
const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto flex items-center justify-center gap-10 max-lg:flex-col lg:gap-0">
        <div className="flex w-full items-center justify-center">
          <div>
            <Social footer={true} />
          </div>
        </div>
        <p className="w-full text-center text-muted-foreground">
          Copyright &copy; Tuan Nguyen. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
