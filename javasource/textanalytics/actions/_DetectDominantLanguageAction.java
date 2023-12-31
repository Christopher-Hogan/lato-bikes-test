// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package textanalytics.actions;

import java.math.BigDecimal;
import java.util.ArrayList;
import com.mendix.cognitiveservices.contracts.textanalytics.DominantLanguage;
import com.mendix.cognitiveservices.contracts.textanalytics.Language;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class _DetectDominantLanguageAction extends CustomJavaAction<java.util.List<IMendixObject>>
{
	private java.lang.String text;

	public _DetectDominantLanguageAction(IContext context, java.lang.String text)
	{
		super(context);
		this.text = text;
	}

	@java.lang.Override
	public java.util.List<IMendixObject> executeAction() throws Exception
	{
		// BEGIN USER CODE
		if(!Utils.IsStringValid(text)) {
			return null;
		}
		
		var context = this.getContext();
		var service = ServiceLocator.INSTANCE.getInstance(this.getContext());
		service.open();
		var result = service.detectDominantLanguage(text).get();
		service.close();
		var list = new ArrayList<IMendixObject>();
		for(var item : result) {
			list.add(getEntity(context, item));
		}
		return list;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "_DetectDominantLanguageAction";
	}

	// BEGIN EXTRA CODE
	private textanalytics.proxies.Language getLanguage(IContext context, Language language) throws CoreException {
		var lang = new textanalytics.proxies.Language(context);
		lang.setCode(language.code);
		lang.setName(language.name);
		lang.commit(context);
		return lang;
	}
	
	private IMendixObject getEntity(IContext context, DominantLanguage language) throws CoreException {
		var lang = new textanalytics.proxies.DominantLanguage(context);
		lang.setDominantLanguage_Language(getLanguage(context, language.language));
		lang.setConfidenceScore(BigDecimal.valueOf(language.confidenceScore));
		lang.commit(context);
		return lang.getMendixObject();
	}
	// END EXTRA CODE
}
