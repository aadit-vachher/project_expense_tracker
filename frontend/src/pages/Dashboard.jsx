import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './Dashboard.css'

const Dashboard=()=>{
  const navigate=useNavigate()

  useEffect(()=>{
    const token=localStorage.getItem('token')
    if(!token){
      navigate('/login')
    }
  },[navigate])

  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  return(
    <div className="dashcont">
      <div className="dashhead">
        <div className="dashleft">
          <h1 className="dashlogo">Expense Tracker</h1>
        </div>
        <div className="dashright">
          <button className="logoutbtn" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="dashbody">
        <div className="wellsec">
          <h2 className="welltitle">Welcome to Expense Tracker!</h2>
          <p className="wellsub">Manage your finances and track your spending efficiently.</p>
        </div>

        <div className="cardgrid">
          <div className="card">
            <div className="cardicon"><img src='../public/total_exp.png' alt='Total Expenses'></img></div>
            {/* <h3 className="cardtitle">Total Expenses</h3> */}
            <p className="cardval">$0.00</p>
          </div>
          <div className="card">
            <div className="cardicon"><img src="../public/this_month.png" alt="this_month" /></div>
            {/* <h3 className="cardtitle">This Month</h3> */}
            <p className="cardval">$0.00</p>
          </div>
          <div className="card">
            <div className="cardicon"><img src="../public/budget_left .png" alt="" /></div>
            {/* <h3 className="cardtitle">Budget Left</h3> */}
            <p className="cardval">$0.00</p>
          </div>
        </div>

        <div className="actsec">
          <button className="actbtn addbtn">+ Add Expense</button>
          <button className="actbtn viewbtn">View All Expenses</button>
        </div>

        <div className="infosec">
          <p className="infotext">Start by adding your first expense to begin tracking your spending. You can view detailed analytics and reports later.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
