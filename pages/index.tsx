import { GetServerSidePropsContext } from 'next'

function Index() { }

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (context.req && context.res) {
    if (context.req.method !== 'GET') {
      context.res.setHeader('Allow', 'GET')
      context.res.writeHead(405, 'Method Not Allowed')
    } else {
      context.res.writeHead(301, { Location: process.env.SITE_URL })
      context.res.end()
    }
  }
  return {
    props: {},
  }
}

export default Index