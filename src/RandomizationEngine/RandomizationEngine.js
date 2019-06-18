import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: 'randomSerif';
     src: url("${props => props.currentSerif}");
  }
  @font-face {
     font-family: 'randomSansSerif';
     src: url("${props => props.currentSansSerif}");
  }
`;

const P = styled.p`
	font-family: "randomSansSerif", "Helvetica", sans-serif;
`;

const BlockQuote = styled.blockquote`
	font-family: "randomSansSerif", "Helvetica", sans-serif;
`;

const H1 = styled.h1`
	font-family: "randomSerif", "Garamond", serif;
`;

const H3 = styled.h3`
	font-family: "randomSerif", "Garamond", serif;
`;

const H4 = styled.h4`
	font-family: "randomSerif", "Garamond", serif;
`;

const H5 = styled.h5`
	font-family: "randomSerif", "Garamond", serif;
`;

const H6 = styled.h6`
	font-family: "randomSerif", "Garamond", serif;
`;

class RandomizationEngine extends React.Component {
	render() {
	  return (
	    <div className="randomizationEngine">
	    	<GlobalStyle currentSansSerif={(this.props.currentSansSerif ? this.props.currentSansSerif : 'Helvetica')} currentSerif={(this.props.currentSerif ? this.props.currentSerif : 'Garamond')} />
				<H1>Is–ought problem</H1>
				<H6>From Wikipedia, the free encyclopedia</H6>

				<P>The <strong>is–ought problem</strong>, as articulated by the Scottish philosopher and historian David Hume (1711–76), states that many writers make claims about what ought to be, based on statements about what is. Hume found that there seems to be a significant difference between positive statements (about what is) and prescriptive or normative statements (about what ought to be), and that it is not obvious how one can coherently move from descriptive statements to prescriptive ones. The is–ought problem is also known as <strong>Hume's law</strong>, <strong>Hume's guillotine</strong> or <strong>fact–value gap</strong>.</P>
				<P>A similar view is defended by G. E. Moore's open-question argument, intended to refute any identification of moral properties with natural properties. This so-called naturalistic fallacy stands in contrast to the views of ethical naturalists.</P>

				<H3>Overview</H3>
				<P>Hume discusses the problem in book III, part I, section I of his book, <em>A Treatise of Human Nature</em> (1739):</P>
				<BlockQuote>In every system of morality, which I have hitherto met with, I have always remarked, that the author proceeds for some time in the ordinary way of reasoning, and establishes the being of a God, or makes observations concerning human affairs; when of a sudden I am surprised to find, that instead of the usual copulations of propositions, <em>is</em>, and <em>is not</em>, I meet with no proposition that is not connected with an ought, or an ought not. This change is imperceptible; but is, however, of the last consequence. For as this <em>ought</em>, or <em>ought not</em>, expresses some new relation or affirmation, 'tis necessary that it should be observed and explained; and at the same time that a reason should be given, for what seems altogether inconceivable, how this new relation can be a deduction from others, which are entirely different from it. But as authors do not commonly use this precaution, I shall presume to recommend it to the readers; and am persuaded, that this small attention would subvert all the vulgar systems of morality, and let us see, that the distinction of vice and virtue is not founded merely on the relations of objects, nor is perceived by reason.</BlockQuote>

				<P>Hume calls for caution against such inferences in the absence of any explanation of how the ought-statements follow from the is-statements. But how exactly <em>can</em> an "ought" be derived from an "is"? The question, prompted by Hume's small paragraph, has become one of the central questions of ethical theory, and Hume is usually assigned the position that such a derivation is impossible. This complete severing of "is" from "ought" has been given the graphic designation of <em>Hume's Guillotine</em>.</P>
				<H3>Implications</H3>
				<P>The apparent gap between "is" statements and "ought" statements, when combined with Hume's fork, renders "ought" statements of dubious validity. Hume's fork is the idea that all items of knowledge are based either on logic and definitions, or else on observation. If the is–ought problem holds, then "ought" statements do not seem to be known in either of these two ways, and it would seem that there can be no moral knowledge. Moral skepticism and non-cognitivism work with such conclusions.</P>
				<H3>Responses</H3>
				<H4>Oughts and goals</H4>
				<P>Ethical naturalists contend that moral truths exist, and that their truth value relates to facts about physical reality. Many modern naturalistic philosophers see no impenetrable barrier in deriving "ought" from "is", believing it can be done whenever we analyze goal-directed behavior. They suggest that a statement of the form <em>"In order for agent A to achieve goal B, A reasonably ought to do C"</em> exhibits no category error and may be factually verified or refuted. "Oughts" exist, then, in light of the existence of goals. A counterargument to this response is that it merely pushes back the 'ought' to the subjectively valued 'goal' and thus provides no fundamentally objective basis to one's goals which, consequentially, provides no basis of distinguishing moral value of fundamentally different goals. A possible basis for an objective, moral realist, morality might be an appeal to teleonomy.</P>
				<P>This is similar to work done by moral philosopher Alasdair MacIntyre, who attempts to show that because ethical language developed in the West in the context of a belief in a human telos—an end or goal—our inherited moral language, including terms such as good and bad, have functioned, and function, to evaluate the way in which certain behaviors facilitate the achievement of that telos. In an evaluative capacity, therefore, good and bad carry moral weight without committing a category error. For instance, a pair of scissors that cannot easily cut through paper can legitimately be called bad since it cannot fulfill its purpose effectively. Likewise, if a person is understood as having a particular purpose, then behaviour can be evaluated as good or bad in reference to that purpose. In plainer words, a person is acting good when that person fulfills that person's purpose.</P>
				<P>Even if the concept of an "ought" is meaningful, this need not involve morality. This is because some goals may be morally neutral, or (if they exist) against what is moral. A poisoner might realize his victim has not died and say, for example, "I ought to have used more poison," since his goal is to murder. The next challenge of a moral realist is thus to explain what is meant by a "moral ought".</P>
				<H4>Discourse ethics</H4>
				<P>Proponents of discourse ethics argue that the very act of discourse implies certain "oughts", that is, certain presuppositions that are necessarily accepted by the participants in discourse, and can be used to further derive prescriptive statements. They therefore argue that it is incoherent to argumentatively advance an ethical position on the basis of the is–ought problem, which contradicts these implied assumptions.</P>
				<H5>Moral oughts</H5>
				<P>As MacIntyre explained, someone may be called a good person if people have an inherent purpose. Many ethical systems appeal to such a purpose. This is true of some forms of moral realism, which states that something can be wrong, even if every thinking person believes otherwise (the idea of brute fact about morality). The ethical realist might suggest that humans were created for a purpose (e.g. to serve God), especially if they are an ethical non-naturalist. If the ethical realist is instead an ethical naturalist, they may start with the fact that humans have evolved and pursue some sort of evolutionary ethics (which risks “committing” the moralistic fallacy). Not all moral systems appeal to a human telos or purpose. This is because it is not obvious that people even have any sort of natural purpose, or what that purpose would be. Although many scientists do recognize teleonomy (a tendency in nature), few philosophers appeal to it (this time, to avoid the naturalistic fallacy).</P>

				<P>Goal-dependent oughts run into problems even without an appeal to an innate human purpose. Consider cases where one has no desire to be good—whatever it is. If, for instance, a person wants to be good, and good means washing one's hands, then it seems one morally ought to wash their hands. The bigger problem in moral philosophy is what happens if someone does <em>not</em> want to be good, whatever its origins? Put simply, in what sense ought we to hold the goal of being good? It seems one can ask "how am I rationally required to hold 'good' as a value, or to pursue it?"</P>
				<P>The issue above mentioned is a result of an important ethical relativist critique. Even if "oughts" depend on goals, the ought seems to vary with the person's goal. This is the conclusion of the ethical subjectivist, who says a person can only be called good according to whether they fulfill their own, <em>self-assigned</em> goal. Alasdair MacIntyre himself suggests that a person's purpose comes from their culture, making him a sort of ethical relativist. Ethical relativists acknowledge local, institutional facts about what is right, but these are facts that can still vary by society. Thus, without an objective "moral goal", a moral ought is difficult to establish. G. E. M. Anscombe was particularly critical of the word "ought" for this reason; understood as "We need such and such, and the only way to get it is this way"—a person may need something immoral, or else find that their noble need requires immoral action. Anscombe would even go as far to suggest that, "of what is morally right and wrong, and of the moral sense of "ought," ought to be jettisoned if this is psychologically possible".</P>
				<P>If moral goals depend on private assumptions or public agreement, so may morality as a whole. For example, Canada might call it good to maximize global welfare, where a citizen, Alice, calls it good to focus on herself, and then her family, and finally her friends (with little empathy for strangers). It does not seem that Alice can be objectively or rationally bound—without regard to her personal values nor those of groups of other people—to act a certain way. In other words, we may not be able to say "You just should do this". Moreover, persuading her to help strangers would necessarily mean appealing to values she already possesses (or else we would never even have a hope of persuading her). This is another interest of normative ethics—questions of binding forces.</P>
				<P>There may be responses to the above relativistic critiques. As mentioned above, ethical realists that are non-natural can appeal to God's purpose for humankind. On the other hand, naturalistic thinkers may posit that valuing people's well-being is somehow 'obviously' the purpose of ethics, or else the only relevant purpose worth talking about. This is the move made by natural law, scientific moralists and some utilitarians.</P>
				<H5>Institutional facts</H5>
				<P>John Searle also attempts to derive "ought" from "is". He tries to show that the act of making a promise places one under an obligation by definition, and that such an obligation amounts to an "ought". This view is still widely debated, and to answer criticisms, Searle has further developed the concept of institutional facts, for example, that a certain building <em>is</em> in fact a bank and that certain paper <em>is</em> in fact money, which would seem to depend upon general recognition of those institutions and their value.</P>
				<H5>Indefinables</H5>
				<P>Indefinables are concepts so global that they cannot be defined; rather, in a sense, they themselves, and the objects to which they refer, define our reality and our ideas. Their meanings cannot be stated in a true definition, but their meanings can be referred to instead by being placed with their incomplete definitions in self-evident statements, the truth of which can be tested by whether or not it is impossible to think the opposite without a contradiction. Thus, the truth of indefinable concepts and propositions using them is entirely a matter of logic.</P>
				<P>An example of the above is that of the concepts "finite parts" and "wholes"; they cannot be defined without reference to each other and thus with some amount of circularity, but we can make the self-evident statement that "the whole is greater than any of its parts", and thus establish a meaning particular to the two concepts.</P>
				<P>These two notions being granted, it can be said that statements of "ought" are measured by their <em>prescriptive</em> truth, just as statements of "is" are measured by their <em>descriptive</em> truth; and the descriptive truth of an "is" judgment is defined by its correspondence to reality (actual or in the mind), while the prescriptive truth of an "ought" judgment is defined according to a more limited scope—its correspondence to right desire (conceivable in the mind and able to be found in the rational appetite, but not in the more "actual" reality of things independent of the mind or rational appetite).</P>
				<P>To some, this may immediately suggest the question: "How can we know what is a right desire if it is already admitted that it is not based on the more actual reality of things independent of the mind?" The beginning of the answer is found when we consider that the concepts "good", "bad", "right" and "wrong" are indefinables. Thus, right desire cannot be defined properly, but a way to refer to its meaning may be found through a self-evident prescriptive truth.</P>
				<P>That self-evident truth which the moral cognitivist claims to exist upon which all other prescriptive truths are ultimately based is: <em>One ought to desire what is really good for one and nothing else</em>. The terms "real good" and "right desire" cannot be defined apart from each other, and thus their definitions would contain some degree of circularity, but the stated self-evident truth indicates a meaning particular to the ideas sought to be understood, and it is (the moral cognitivist might claim) impossible to think the opposite without a contradiction. Thus combined with other descriptive truths of what is good (goods in particular considered in terms of whether they suit a particular end and the limits to the possession of such particular goods being compatible with the general end of the possession of the total of all real goods throughout a whole life), a valid body of knowledge of right desire is generated.</P>
				<H5>Functionalist counterexamples</H5>
				<P>Several counterexamples have been offered by philosophers claiming to show that there are cases when an "ought" logically follows from an "is." First of all, Hilary Putnam, by tracing back the quarrel to Hume's dictum, claims fact/value entanglement as an objection, since the distinction between them entails a value. A. N. Prior points out, from the statement "He is a sea captain," it logically follows, "He ought to do what a sea captain ought to do." Alasdair MacIntyre points out, from the statement "This watch is grossly inaccurate and irregular in time-keeping and too heavy to carry about comfortably," the evaluative conclusion validly follows, "This is a bad watch." John Searle points out, from the statement "Jones promised to pay Smith five dollars," it logically follows that "Jones ought to pay Smith five dollars." The act of promising by definition places the promiser under obligation.</P>
				<H5>Moral realism</H5>
				<P>Philippa Foot adopts a moral realist position, criticizing the idea that when evaluation is superposed on fact there has been a "committal in a new dimension." She introduces, by analogy, the practical implications of using the word "injury." Not just anything counts as an injury. There must be some impairment. When we suppose a man wants the things the injury prevents him from obtaining, haven’t we fallen into the old naturalist fallacy?</P>
				<BlockQuote>It may seem that the only way to make a necessary connection between 'injury' and the things that are to be avoided, is to say that it is only used in an 'action-guiding sense' when applied to something the speaker intends to avoid. But we should look carefully at the crucial move in that argument, and query the suggestion that someone might happen not to want anything for which he would need the use of hands or eyes. Hands and eyes, like ears and legs, play a part in so many operations that a man could only be said not to need them if he had no wants at all.</BlockQuote>
				<P>Foot argues that the virtues, like hands and eyes in the analogy, play so large a part in so many operations that it is implausible to suppose that a committal in a non-naturalist dimension is necessary to demonstrate their goodness.</P>
				<BlockQuote>Philosophers who have supposed that actual action was required if 'good' were to be used in a sincere evaluation have got into difficulties over weakness of will, and they should surely agree that enough has been done if we can show that any man has reason to aim at virtue and avoid vice. But is this impossibly difficult if we consider the kinds of things that count as virtue and vice? Consider, for instance, the cardinal virtues, prudence, temperance, courage and justice. Obviously any man needs prudence, but does he not also need to resist the temptation of pleasure when there is harm involved? And how could it be argued that he would never need to face what was fearful for the sake of some good? It is not obvious what someone would mean if he said that temperance or courage were not good qualities, and this not because of the 'praising' sense of these words, but because of the things that courage and temperance are.</BlockQuote>
				<H5>Misunderstanding</H5>
				<P>Hilary Putnam argues philosophers that accept Hume's "is–ought" distinction reject his reasons in making this, and thus undermine the entire claim.</P>
				<P>Various scholars have also indicated that, in the very work where Hume argues for the is–ought problem, Hume himself derives an "ought" from an "is". Such seeming inconsistencies in Hume have led to an ongoing debate over whether Hume actually held to the is–ought problem in the first place, or whether he meant that ought inferences can be made but only with good argumentation.</P>
	    </div>
	  );
	}

}

export default RandomizationEngine;
