---
title: Nominating a Committer and PPMC member
sidebar_position: 3
---

## Initiate discussion in the community private mailing group
Any Apache GraphAr (incubating) PPMC member can initiate a voting discussion.
After PPMC member finds any valuable contributions from community contributors and obtains the consent of the candidate, they can initiate a discussion on GraphAr's private mailing list.
In the discussion email, the proposer should clearly state the candidate's contribution and give the address for reviewing the corresponding contribution, so that everyone can discuss and analyze it.
The discussion email is sent to private@graphar.apache.org. The discussion will last at least 72 hours. PPMC members will fully express their views on the proposed email.
The following is a template  discussion email:
```shell
[DISCUSS] Propose ${Candidate_Full_Name} as new ${committer or PPMC member}

Hi, GraphAr PPMC,
 
I'd like to discuss the proposal to add ${Candidate_Full_Name} as a new ${committer or PPMC member}

<Brief description and links of ${Candidate_Full_Name}'s contributions>
 
1. https://github.com/apache/incubator-graphar/issues/created_by/${Candidate_GitHub_ID} 
2. https://github.com/apache/incubator-graphar/commits?author=${Candidate_GitHub_ID}
```

:::caution
You can communicate with candidates in advance to obtain his/her full name, and replace the `${Candidate_Full_Name}`.
:::

## Initiate vote in the community private mailing group
If the discussion email does not receive the disagreement information within the specified time, the poll initiator needs to initiate a committer or PPMC member election vote on private mailing list.
The voting email is sent to private@graphar.apache.org for at least 72 hours, and at least 3 votes +1 passed; if 0 votes or 1 vote -1 vote, the vote will fail; if a -1 vote is initiated, the voter needs to EXPLAIN the reason for the -1 score clearly so that everyone can understand and know.
The following is a template  poll email: 
```shell
[VOTE] New ${committer or PPMC member}: ${Candidate_Full_Name} 

Hi, GraphAr PPMC,
 
 <Brief description and links of ${Candidate_Full_Name}'s contributions>

I think making him/her a ${committer or PPMC member} will be a recognition of his outstanding work for GraphAr. So, I am happy to call VOTE to accept ${Candidate_Full_Name} as an GraphAr ${committer or PPMC member}.
 
Voting will continue for at least 72 hours or until the required number of votes is reached.

Please vote accordingly:
[ ] +1 approve
[ ] +0 no opinion
[ ] -1 disapprove with the reason  
  
Here are three links to his contributions to GraphAr:
1. Issues: https://github.com/apache/incubator-graphar/pulls?q=${Candidate_GitHub_ID}
2. PRs   : https://github.com/apache/incubator-graphar/issues?q=${Candidate_GitHub_ID}
3. Others:  https://xxx.com/xxx/xxx/?q=${Candidate_GitHub_ID}
```

## Feedback on voting results
After the voting email is over, the initiator of the vote needs to `remind the voting end` in the second [VOTE] email; at the same time, the initiator of the vote needs to initiate a vote summary email, and the summary email is sent to private@inlong.apache.org.
The following is a template  vote summary email:
```shell
[RESULTS][VOTE] New ${committer or PPMC member}: ${Candidate_Full_Name}

Hi everyone,

The vote has now closed. The results are:

Binding Votes:
+1 [TOTAL BINDING +1 VOTES]
 0 [TOTAL BINDING +0/-0 VOTES]
-1 [TOTAL BINDING -1 VOTES]


Vote thread:
${vote_thread_url}

Then I'm going to invite ${Candidate_Full_Name} to join us.

Thanks for everyone's support!   
```

:::caution
If it is not passed, the result is "The vote for "${Candidate_GitHub_ID} as an GraphAr committer or PPMC member" has FAILED and closed now."
:::


 
At this point, the entire process is completed, and the candidate officially becomes the Committer or PMC Member of the project.