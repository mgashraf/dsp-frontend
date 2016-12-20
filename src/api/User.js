/**
 * Copyright (c) 2016 Topcoder Inc, All rights reserved.
 */

/**
 * A simple implementation of /missions API contract
 *
 * @author       TCSCODER
 * @version      1.0.0
 */
import reqwest from 'reqwest';

/**
 * UserApi consumer, full implement the rest contract
 */
class UserApi {
  /**
   * Default Constructor
   * @param  {String}   basePath      the base API path
   */
  constructor(basePath) {
    this.basePath = basePath;
  }

  login(email, password) {
    const url = `${this.basePath}/api/v1/login`;

    return reqwest({
      url,
      method: 'post',
      type: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        email,
        password,
      }),
      error(err) {
        return err;
      },
    });
  }

  register(name, email, password) {
    const url = `${this.basePath}/api/v1/register`;
    email = Math.floor((Math.random() * 100) + 1) + email;
    return reqwest({
      url,
      method: 'post',
      type: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        firstName: name,
        lastName: name,
        email,
        phone: '1',
        password,
      })});
  }

  registerSocialUser(name, email) {
    const url = `${this.basePath}/api/v1/login/social`;

    return reqwest({
      url,
      method: 'post',
      type: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        name,
        email,
      })});
  }
}

export default UserApi;
