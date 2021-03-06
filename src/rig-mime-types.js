import _ from 'lodash';
import mimeTypes from '@paulcbetts/mime-types';

const typesToRig = {
  'text/typescript': 'ts',
  'text/jade': 'jade',
  'text/cson': 'cson'
};


/**
 * Adds MIME types for types not in the mime-types package
 *  
 * @private
 */ 
export function init() {
  _.each(Object.keys(typesToRig), (type) => {
    let ext = typesToRig[type];

    mimeTypes.types[ext] = type;
    mimeTypes.extensions[type] = _.clone([ext], true);
  });
}
