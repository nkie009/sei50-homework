import Vue from 'vue';
import {mount} from '@vue/test-utils';
import sinon from 'sinon';

import FlightSearch from '@/components/FlightSearch';

const $router ={
  push: sinon.spy()
};

describe('<FlightSearch>', () => {

  // <FlightSearch> is normally managed by the Vue router -
    // it is mounted onto the DOM when a user goes to the '/search'
    // route.
    // But in our test environment, we are just mounting the
    // component directly, in isolation. So features provided
    // by the router, like 'this.$router', and therefore
    // 'this.$router.push()', are not defined! This means
    // that the component will throw an error when we try
    // to click on the search button, which triggers that
    // router push.
    // SO, since we need to know as the "final output" of this
    // component whether it actually tries to push the correct
    // search results route onto the router... we need to
    // fake the router and in particular, its push() method,
    // so we can test whether the component is actually doing
    // its job!

  it('Should render a search form', async () =>{

    const wrapper = mount( 
      FlightSearch, 
      {
        mocks: {
          // $router: {
          //   push: function(args){
          //     console.log('FAKE $router.push called:', args);
          //     // expect(args.name).to.equal('SearchResult')
          //   } //push
          // } // $router

          $router: $router //use the sinon spy defined above

        } // mocks
      } //options 2nd arg to mount()
    ); //it

    // console.log('text:', wrapper.html())


    expect(wrapper.text()).to.contain('Search Flight');
    
    const options = wrapper.findAll('option');
    console.log('CHECK HERE', options.at(1).text());
    expect(options.at(1).text()).to.equal('SYD');

    const button = wrapper.find('button')
    // console.log('find the button', button)
    expect(button.element.tagName).to.equal('BUTTON');

    await button.trigger('click');
    // expect($router.push).to.have.been.called;
    expect($router.push).to.have.been.calledWith(sinon.match({
      name: 'SearchResults',
      params: {
        origin: 'SYD',
        destination: 'MEL'
      }
    }));

  });// it

});// describe FlightSearch 

