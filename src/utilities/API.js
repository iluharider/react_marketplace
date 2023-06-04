const config = {
    headers: {
      'content-type': 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ5YTI0ZDM5MmQzNjBiNzhhYjIzM2EiLCJpYXQiOjE2Nzg4MTIxNjQsImV4cCI6MTcxMDM0ODE2NH0.DAQbfu0jmq4DvnkuIMjVRPTNZmGT-p0C0t-uxMERtnA'
    },
    baseUrl: 'https://api.react-learning.ru' 
  }
class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    getProductList(){
        return fetch(`${this._baseUrl}/products`, {
            headers: this._headers,
        }).then(onResponse);
    }
    getUserInfo(){
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        }).then(onResponse);
    }
    search(query){
        return fetch(`${this._baseUrl}/products/search?query=${query}`, {
            headers: this._headers,
        }).then(onResponse);
    }
    // changeLikeStatus(id, isLiked){
    //     return fetch(`${this._baseUrl}/products/likes/${id}`, {
    //         headers: this._headers,
    //         method: isLiked ? 'PUT': 'DELETE'
    //     }).then(onResponse);
    // }
    addLike(id){
        return fetch(`${this._baseUrl}/products/likes/${id}`, {
            headers: this._headers,
            method: 'PUT',
        }).then(onResponse);
    }
    deleteLike(id){
        return fetch(`${this._baseUrl}/products/likes/${id}`, {
            headers: this._headers,
            method: 'DELETE',
        }).then(onResponse);
    }
}

const onResponse = (res) => {
    return  res.ok ? res.json() : Promise.reject('Error');
}

export const api = new Api(config);