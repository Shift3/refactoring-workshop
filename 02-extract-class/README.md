Extract Class
=============

Extract class is often used as a refactoring when a class has taken on too
many responsibilities.

This class has too many responsibilities.

It tries to do:

1. Parsing CSV
2. Trimming whitespace from edges email addresses.
3. Validating Email against a regex.
4. Sending Email Invitations
5. Checking validity of the recipient and message passed in.

Instructions
------------

- Extract a Parser class that takes care of responsibilities 1, 2, and 3
- InvitationSender should only handle responsibilities 4 and 5

