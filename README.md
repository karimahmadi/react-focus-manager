# What Am I?

Set of React Components which help with focus management inside your application.

# Components

## Focus Trap

Traps focus within given container

## Focus Within

Allows for drawing focus in parent container.

# Behaviour

Focus management relies on focus-visible behaviour. What does it mean? 
It means that focus outline/ring is only drawn when focus originates from keyboard navigation.

Current implementation relies on https://github.com/WICG/focus-visible Polyfill.
