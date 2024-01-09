export default function Page({ params }: { params: { club: string, event: string } }) {
    return <div>My Post: {params.club} {params.event}</div>
  }