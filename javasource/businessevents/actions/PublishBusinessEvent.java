// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// Special characters, e.g., é, ö, à, etc. are supported in comments.

package businessevents.actions;

import com.mendix.databroker.services.ProducerService;
import com.mendix.databroker.utils.ConfigurationProvider;
import com.mendix.databroker.utils.CoreProxyImpl;
import com.mendix.core.Core;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.webui.CustomJavaAction;
import com.mendix.systemwideinterfaces.core.IMendixObject;

/**
 * This java action publishes the business event to the server/channel configured in the BusinessEvents module constants. After publishing other applications will be able to consume the event.
 * 
 * Service name: Specify the name for the Business Event service. If left empty a default service name is added: `Project-Id.EntityName`.
 *  
 * Subject: Subject of the business event. Subject can be anything you consider useful, it’s like a short description of what can be expected in the payload, similar to email subject. It will help subscribed apps decide if the event might be useful to them.
 * 
 * Event name: Name of the business event. If empty then it will be set to entity name.
 * 
 * Event Data: The entity that you want to publish in the service that will represent the Business event in the subscribers app. This should an entity that you have configured to inherit from the `BusinessEvent`.
 * 
 * NOTE
 * This java action will commit all event objects at the start of the publishing process. In case something goes wrong during the publishing process a retry mechanism will be triggered for up to 48 hours. Once a retry is successful a second commit happens to the business event object to update the `EventId` and `PublishedTimestamp` attributes.
 */
public class PublishBusinessEvent extends CustomJavaAction<java.lang.Void>
{
	private java.lang.String ServiceName;
	private com.mendix.systemwideinterfaces.javaactions.parameters.IStringTemplate Subject;
	private java.lang.String EventName;
	private IMendixObject __BusinessEvent;
	private businessevents.proxies.PublishedBusinessEvent BusinessEvent;

	public PublishBusinessEvent(IContext context, java.lang.String ServiceName, com.mendix.systemwideinterfaces.javaactions.parameters.IStringTemplate Subject, java.lang.String EventName, IMendixObject BusinessEvent)
	{
		super(context);
		this.ServiceName = ServiceName;
		this.Subject = Subject;
		this.EventName = EventName;
		this.__BusinessEvent = BusinessEvent;
	}

	@java.lang.Override
	public java.lang.Void executeAction() throws Exception
	{
		this.BusinessEvent = this.__BusinessEvent == null ? null : businessevents.proxies.PublishedBusinessEvent.initialize(getContext(), __BusinessEvent);

		// BEGIN USER CODE
		if (this.BusinessEvent != null) {
			this.__BusinessEvent.setValue(getContext(), "SourceName", this.ServiceName);
			this.__BusinessEvent.setValue(getContext(), "EventName", this.EventName);
			this.__BusinessEvent.setValue(getContext(), "Subject", this.Subject.toString());

			ConfigurationProvider configurationProvider = new ConfigurationProvider(CoreProxyImpl.INSTANCE);
        	ProducerService producerService = new ProducerService(configurationProvider, CoreProxyImpl.INSTANCE);
			producerService.schedulePublish(this.__BusinessEvent);
		} else {
			String errorMessage = String.format("Empty object received for publishing %s event", this.EventName);
			Core.getLogger("BusinessEvents").error(errorMessage);
		}

		return null;
		// END USER CODE
	}

	/**
	 * Returns a string representation of this action
	 * @return a string representation of this action
	 */
	@java.lang.Override
	public java.lang.String toString()
	{
		return "PublishBusinessEvent";
	}

	// BEGIN EXTRA CODE
	// END EXTRA CODE
}
