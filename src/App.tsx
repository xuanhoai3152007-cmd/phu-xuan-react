import Header from './components/Header'
import WelcomeBanner from './components/WelcomeBanner'
import PostCard from './components/PostCard'
import Footer from './components/Footer'

import {
  formatDate,
  toSlug,
} from './utils/string-utils'

function App() {
  console.log(
  'Hôm nay:',
  formatDate(new Date()),
)

console.log(
  'Slug:',
  toSlug('Trang chủ phu-xuan-react'),
)
  return (
    <>
      <Header />

      <main>
        <WelcomeBanner />
        <PostCard />
      </main>

      <Footer />
    </>
  )
}

export default App