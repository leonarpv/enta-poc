import { Observable } from "rxjs/Rx";

//actions
import {
  SIGN_IN,
  signInSuccess,
  signInError,
  FETCH_IMPACT,
  fetchImpactSuccess,
  fetchImpactError
} from "../actions/index";

import { parseAPI } from "../serverAPI/parseAPI";

//epics
export const signInEpic = action$ =>
  action$.ofType(SIGN_IN).mergeMap(({ payload }) =>
    parseAPI("Account/LogIn", "POST", payload)
      .then(signInSuccess)
      .catch(signInError)
  );

export const fetchImpactEpic = action$ =>
  action$.ofType(FETCH_IMPACT).mergeMap(({ payload }) =>
    Observable.from(
      new Promise((resolve, reject) => {
        setTimeout(function() {
          const impact = (Math.random() * 100000 + 1).toFixed();
          if (payload) {
            resolve(impact);
          } else {
            reject(impact);
          }
        }, 2000);
      })
        .then(fetchImpactSuccess)
        .catch(fetchImpactError)
    )
  );
