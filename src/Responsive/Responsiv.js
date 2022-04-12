import React from 'react'
import classes from "./Responsiv.module.css"

 function Responsiv() {
  return (
      <>
      <div style={{textAlign:"center"}}>
          <h1>Grid System</h1>
      </div>
    <main>
        
        <div className={classes.div1}><a href="/">Home</a>
        <a href="/">Contact</a>
        <a href="/">About</a>
        </div>



        <div className={classes.div2}>box1</div>
        <div className={classes.div3}>box2</div>
        <div className={classes.div4}>box3</div>
        <div className={classes.div5}>sidebar</div>
        <div className={classes.div6}>main Content</div>
        <div className={classes.div7}>footer</div>
    </main>
    </>
  )
}
export default Responsiv;