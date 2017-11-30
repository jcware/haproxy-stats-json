import { expect } from 'chai'
import { toArray, toJson } from '../src/main'

const dataCsvStr = `#
pxname,svname,
http-in,FRONTEND,
admin,BACKEND,`
const aDataCsv = [ 'pxname,svname,', 'http-in,FRONTEND,', 'admin,BACKEND,' ]
const dataJson =  [ { pxname: 'http-in', svname: 'FRONTEND' },
                    { pxname: 'admin', svname: 'BACKEND' } ]

describe('Haroxy Stats', () => {
  describe('Smoke tests', () => {
    it('should toArray exists', () => {
      expect(toArray).to.exist
    })
    it('should toJson exists', () => {
      expect(toJson).to.exist
    })
  })

  describe('toArray method', () => {
    it('should strData be a string', () => {
      expect(() => toArray(1)).to.throw(TypeError, /strData must be a string/)
    })
    it('should strdata length be greater than 0', () => {
      expect(() => toArray('')).to.throw(Error, /strData length must be greater than 0/)
    })

    it('should toArray return an array', () => {
      expect(toArray(dataCsvStr)).to.be.eql(aDataCsv)
    })

    it('should remove item with value: #', () => {
      expect(toArray(dataCsvStr)).to.be.eql(aDataCsv)
    })

    it('shoud array´s length of the head be the same of the tail', () => {
      const haproxyArrayData = toArray(dataCsvStr)
      const head = haproxyArrayData[0].split(',')
      const tail = haproxyArrayData[1].split(',')
      expect(head.length).to.be.eq(tail.length)
    })
  })

  describe('toJson method', () => {
    it('should toJson return a JSON object', () => {
      expect(toJson(dataCsvStr)).to.be.eql(dataJson)
    })
  })

})
