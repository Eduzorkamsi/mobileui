import "../style/home.css";
import Hamburger from "../assets/hamburger.png";
import Button from "@material-ui/core/Button";
import SortSelect from "../components/select";
import Card from "@material-ui/core/Card";
import Profile1 from "../assets/profile1.png";
import Profile2 from "../assets/profile2.png";
import Profile3 from "../assets/profile3.png";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div className="home">
      <div className="first_slot">
        <div className="left">
          <img src={Hamburger} alt="" />
          <text style={{ marginLeft: 16, marginTop: 10, color: "white" }}>
            Hello Sandra,
          </text>
        </div>
        <div className="right">
          <Button variant="contained" color="primary" href="#contained-buttons">
            Add money
          </Button>
        </div>
      </div>
      <div className="second_slot">
        <div className="top">
          <text
            style={{
              color: "white",
              fontWeight: 400,
              fontSize: 12,
              marginBottom: 16,
            }}
          >
            Your current balance is
          </text>
          <text style={{ color: "white", fontWeight: 700, fontSize: 40 }}>
            ₦ 200,000
          </text>
        </div>
        <div className="bottom">
          <Button variant="outlined" color="primary">
            Request Money
          </Button>
          <Button variant="outlined" color="primary" style={{ marginLeft: 16 }}>
            Send Money
          </Button>
        </div>
      </div>
      <div className="third_slot">
        <div className="transaction_details">
          <text style={{ color: "white", marginRight: 102 }}>
            All transactions
          </text>
          <div className="sort">
            <text style={{ color: "#4E589F", fontWeight: 400, fontSize: 12 }}>
              Sort by:
            </text>
            <SortSelect />
          </div>
        </div>
        <div className="transaction_card">
          <div className="card_1">
            <Card style={{ background: "#192259", padding: 16, display: "flex", flexDirection:"row"  }}>
              <div className="left_transaction">
                <div className="transaction_profile">
                  <img src={Profile1} alt="" />
                </div>
                <div className="transaction_status">
                  <text style={{ color: "#858EC5" }}>Adeboye Usman</text>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<PersonOutlineIcon />}
                    style={{background: "#1DC7AC",  marginLeft: -2}}>
                    Received
                  </Button>
                </div>
              </div>
              <div className="right_transaction">
                  <text style={{color: "#1DC7AC",}}>₦ 200,000</text>
              </div>
            </Card>
          </div>
          <div className="card_2">
            <Card style={{ background: "#10194E", padding: 16, display: "flex", flexDirection:"row" }}>
              <div className="left_transaction">
                <div className="transaction_profile">
                  <img src={Profile2} alt="" />
                </div>
                <div className="transaction_status">
                  <text style={{ color: "#858EC5" }}>Mercy Popoola</text>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<ErrorOutlineIcon />}
                    style={{background: "#FE4A54", marginLeft: -2}}
                  >
                   Failed
                  </Button>
                </div>
              </div>
              <div className="right_transaction">
              <text style={{color: "#FE4A54",}}>₦ 110,000</text>
              </div>
            </Card>
          </div>
          <div className="card_3">
            <Card style={{ background: "#192259", padding: 16, display: "flex", flexDirection:"row"  }}>
              <div className="left_transaction">
                <div className="transaction_profile">
                  <img src={Profile3} alt="" />
                </div>
                <div className="transaction_status">
                  <text style={{ color: "#858EC5" }}>Onome Adetayo</text>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<PersonOutlineIcon />}
                    style={{background:"#FAAD39", marginLeft: -2}} >
                    Sent
                  </Button>
                </div>
              </div>
              <div className="right_transaction">
              <text style={{color: "#FAAD39",}}>₦ 10,000</text>
              </div>
            </Card>
          </div>
          <div className="card_4">
            <Card style={{ background: "#10194E", padding: 16, display: "flex", flexDirection:"row"  }}>
              <div className="left_transaction">
                <div className="transaction_profile">
                  <img src={Profile1} alt="" />
                </div>
                <div className="transaction_status">
                  <text style={{ color: "#858EC5" }}>Adeboye Usman</text>

                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    startIcon={<PersonOutlineIcon />}
                    style={{background: "#1DC7AC",  marginLeft: -2}}>
                  
                    Received
                  </Button>
                </div>
              </div>
              <div className="right_transaction">
              <text style={{color: "#1DC7AC",}}>₦ 200,000</text>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
