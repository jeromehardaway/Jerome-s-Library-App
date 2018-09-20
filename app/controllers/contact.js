import Controller from '@ember/controller';
import { match, gte, and } from '@ember/object/computed';
import DS from 'ember-data';
export default Controller.extend({
    
    isLongEnough: gte("yourPorperty.length", 5),
    isBothTrue: and('firstComputerProperty', 'secondComputerProperty'),
});
