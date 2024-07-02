# Component - Tabs Content

## Description
This is the primary component for a collection of tabs, which function as
tabs on desktop, and reduce down to an accordion below a specified breakpoint.

## Usage

To utilize this component it should be embedded within a twig template
and then within the embed assign the data to the tabs_items array.

The tabs_items_override expects the same data as if using the tabs_items
prop, but with the ability to override certain data.

Each tab item should have an ID, title and content -- all strings.

The `data-tabs-breakpoint` is required to determine when to switch the
tabs and accordion functionality. In order to always display tabs,
simply set this value to `0`;

## Languages Used
- PHP / TWIG
- JavaScript (Vanilla)
- SASS/CSS
- HTML