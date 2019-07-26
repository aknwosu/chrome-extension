import { getFavoritedPics, setFavoritePic, fetchPictures } from '../api'
const pictures = [
  {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  }
]
describe('App', () => {
  describe("getFavoritedPics", () => {
    afterEach(() => {
      localStorage.clear()
    })
    it('returns an array of favorite ids if it exists', async () => {
      localStorage.setItem("favorited-pics", '[2]')
      const response = getFavoritedPics()
      expect(response).toEqual([2])
    });

    it('returns an empty array if no favorites exists', async () => {
      const response = getFavoritedPics()
      expect(response).toEqual([])
    });
  })

  describe("setFavoritePic", () => {
    afterEach(() => {
      localStorage.clear()
    })
    it('adds an item to localstorage', () => {
      setFavoritePic(1)
      const items = localStorage.getItem("favorited-pics")
      expect(items).toEqual('[1]')

    })
    it('removes an item from localstorage if it already exists', () => {
      setFavoritePic(1)
      setFavoritePic(1)
      const items = localStorage.getItem("favorited-pics")
      expect(items).toEqual('[]')
    })
  })
  describe("fetchPictures", () => {

    it('makes api call to fetch all pictures', async () => {
      global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
          resolve({
            ok: true,
            clone: function () {
              return { json: function () { return pictures } }
            }
          });
        });
        return p;
      });
      const response = await fetchPictures(pictures)
      expect(response).toEqual(pictures)
    })
  })

  it('catches api call errors', async () => {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        reject({
          message: 'an error occured'
        });
      });
      return p;
    });
    const response = await fetchPictures(pictures)
    expect(response).toBeInstanceOf(Object)
    expect(response.message).toEqual('an error occured')
  })
})