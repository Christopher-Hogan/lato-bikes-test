// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} viewerName
 * @param {string} partName
 * @param {Big} radiansX
 * @param {Big} radiansY
 * @param {Big} radiansZ
 * @returns {Promise.<void>}
 */
export async function RotatePart(viewerName, partName, radiansX, radiansY, radiansZ) {
	// BEGIN USER CODE
	const viewer = await mx.viewer3D.getViewerByName(viewerName);
	const instances = viewer.getInstancesByName(partName);

	_rotatePart(instances, radiansX, radiansY, radiansZ);

	function _rotatePart(instances, radiansX, radiansY, radiansZ) {
		if (instances && instances.length > 0) {
			instances.forEach(function(instance){
				instance.setRotation(radiansX.toNumber(), radiansY.toNumber(), radiansZ.toNumber());
			});
		}
	}
	// END USER CODE
}
