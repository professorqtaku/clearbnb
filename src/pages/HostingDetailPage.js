import { useParams } from 'react-router-dom'

export default function HostingDetailPage() {
  const { id } = useParams()
  const hostingId = () => {
    return id
  }

  return (
    <div>
      <h1>Hosting detail</h1>
      <p>{ id }</p>
    </div>
  )
}