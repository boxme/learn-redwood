import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <p>
        This site was created to demostrate my mastery of Redwood.
      </p>
    </>
  )
}

export default AboutPage
