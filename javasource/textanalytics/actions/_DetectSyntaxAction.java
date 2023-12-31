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
import com.mendix.cognitiveservices.contracts.textanalytics.PartOfSpeechTag;
import com.mendix.cognitiveservices.contracts.textanalytics.Request;
import com.mendix.cognitiveservices.contracts.textanalytics.SyntaxToken;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.mendix.systemwideinterfaces.core.IMendixObject;

public class _DetectSyntaxAction extends CustomJavaAction<java.util.List<IMendixObject>>
{
	private java.lang.String text;
	private java.lang.String languageCode;

	public _DetectSyntaxAction(IContext context, java.lang.String text, java.lang.String languageCode)
	{
		super(context);
		this.text = text;
		this.languageCode = languageCode;
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
		if(!Utils.IsStringValid(languageCode)) {
			languageCode = Utils.getDefaultLangauge(context);
		}
		service.open();
		var req = new Request(text, languageCode);
		var result = service.detectSyntax(req).get();
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
		return "_DetectSyntaxAction";
	}

	// BEGIN EXTRA CODE
	private IMendixObject getEntity(IContext context, SyntaxToken item) throws CoreException {
		var result = new textanalytics.proxies.SyntaxToken(context);
		result.setIndex(item.id);
		result.setPartOfSpeech(getEntityType(item.partOfSpeech));
		result.setText(item.text);
		result.setBeginOffset(item.beginOffset);
		result.setEndOffset(item.endOffset);
		result.setConfidenceScore(BigDecimal.valueOf(item.confidenceScore));
		result.commit(context);
		return result.getMendixObject();
	}
	
	private textanalytics.proxies.PartOfSpeechTag getEntityType(PartOfSpeechTag entityType) {
		switch(entityType) {
			case ADJ:
				return textanalytics.proxies.PartOfSpeechTag.Adjective;
			case ADP:
				return textanalytics.proxies.PartOfSpeechTag.Adposition;
			case ADV:
				return textanalytics.proxies.PartOfSpeechTag.Adverb;
			case AUX:
				return textanalytics.proxies.PartOfSpeechTag.Auxiliary;
			case CONJ:
				return textanalytics.proxies.PartOfSpeechTag.Conjunction;
			case DET:
				return textanalytics.proxies.PartOfSpeechTag.Determiner;
			case INTJ:
				return textanalytics.proxies.PartOfSpeechTag.Interjection;
			case NOUN:
				return textanalytics.proxies.PartOfSpeechTag.Noun;
			case NUM:
				return textanalytics.proxies.PartOfSpeechTag.Numeral;
			case PART:
				return textanalytics.proxies.PartOfSpeechTag.Particle;
			case PRON:
				return textanalytics.proxies.PartOfSpeechTag.Pronoun;
			case PROPN:
				return textanalytics.proxies.PartOfSpeechTag.Proper_Noun;
			case PUNCT:
				return textanalytics.proxies.PartOfSpeechTag.Punctuation;
			case SCONJ:
				return textanalytics.proxies.PartOfSpeechTag.Subordinating_Conjunction;
			case SYM:
				return textanalytics.proxies.PartOfSpeechTag.Symbol;
			case VERB:
				return textanalytics.proxies.PartOfSpeechTag.Verb;
			default:
				return textanalytics.proxies.PartOfSpeechTag.Other;
		}
	}
	// END EXTRA CODE
}
