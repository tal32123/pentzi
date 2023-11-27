import PentziCard from "@/components/pentzi-card"
import Sidebar from "@/components/sidebar"
import { Grid } from "@mui/material"

const Dashboard = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <h1>hello</h1>
      <Grid container spacing={2}>
      {[...Array(4)].map((_, index) => ( 
        <Grid item xs={12} sm={6} md={3} key={index}>
          <PentziCard>chart {index + 1} will be here! 
            </PentziCard>
        </Grid>
      ))}
      </Grid>
    </div>
  )
}

export default Dashboard
