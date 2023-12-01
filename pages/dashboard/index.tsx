import LineChart from "@/components/charts/line-chart";
import PentziCard from "@/components/pentzi-card";
import Sidebar from "@/components/sidebar";
import { Grid } from "@mui/material";
import UtilStyles from "./../../styles/utils.module.css";
const Dashboard = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className={UtilStyles.center}>
        <h1 className={UtilStyles.lightText}>Your Financial Data</h1>
      </div>
      <Grid container spacing={2} className={UtilStyles.center}>
        {[...Array(2)].map((_, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} spacing={0} key={index}>
            <PentziCard>
              <div className={UtilStyles.center}>
                <LineChart
                  stockData={[
                    { date: "2023-01-01", price: Math.random() * 100 },
                    { date: "2023-01-02", price: Math.random() * 200 },
                    { date: "2023-01-03", price: Math.random() * 500 },
                  ]}
                />
              </div>
            </PentziCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
