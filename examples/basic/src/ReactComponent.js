/*
featureTogglesConfig: {
  "feature-10": false
}
*/
import React from "react";

/* toggleStart(feature-10) */
import ReactDom from "react-dom";
/* toggleEnd(feature-10) */

class Welcome extends React.Component {
  render() {
    return (
      <div>
        {/* toggleStart(feature-3) */}
        <h1>This feature is under development</h1>
        {/* toggleEnd(feature-3) */}
        <h1>You only see me, I am a full feature</h1>

        <h1>
          {
            /*toggleStart(feature-10)*/ "This feature is under development" /*toggleEnd(feature-10)*/
          }
          This will show
        </h1>
      </div>
    );
  }
}
export const newComponent = () => {
  return (
    <div>
      {/* toggleStart(feature-3) */}
      <h1>This feature is under development</h1>
      {/* toggleEnd(feature-3) */}

      {/*toggleStart(feature-3)*/ aCondition && (
        /*toggleEnd(feature-3)*/ <h1>This feature is existing feature</h1>
      )}

      <h1>You only see me, I am a full feature</h1>
      <Welcome
        abc="true"
        /* toggleStart(feature-3) */
        hello=""
        /* toggleEnd(feature-3) */
      />

      <h1>
        {
          /*toggleStart(feature-3)*/ "This feature is under development" /*toggleEnd(feature-3)*/
        }
        This will show
      </h1>
    </div>
  );
};
export default Welcome;
