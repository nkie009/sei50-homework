import {adder, subber} from '@/lib/utils';

xdescribe('Utils library', () =>{

  describe('adder()', () =>{

    // let result;
    // beforeEach( ()=> {
    //   result = adder(5,8);
    // })// beforeEach

    it('should add 2 numbers correctly', () => {
      // console.log('Does this work?')
      // console.log('subber:', subber);
      // console.log('bigNum:', bigNum);
      const result = adder(5,8);
      expect(result).to.equal(13);
    })// adder it

    it('should return a number', () => {
      const result = adder(5,8);
      expect(typeof result).to.equal('number');
    })// adder number

  }) //describe adder

  describe('subber()', () =>{
    it('should minus 2 numbers correctly', () => {
      const result = subber(9,8);
      expect(result).to.equal(1);
    })
  })// describe subber

  

}); //describe Utils
