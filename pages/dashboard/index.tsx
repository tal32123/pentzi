import LineChart from "@/components/charts/line-chart"
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
          <PentziCard>
            <LineChart stockData={ [
    { date: '2023-01-01', price: Math.random() * 100 },
    { date: '2023-01-02', price: Math.random() * 200  },
    { date: '2023-01-03', price: Math.random() * 500  },
  ]}/>
            </PentziCard>
        </Grid>
      ))}
      </Grid>
    </div>
  )
}

export default Dashboard
