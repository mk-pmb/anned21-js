
reimports
=========

This is a temporary work-around for my lack of understanding of how
to properly configure the current version of system.js.

The naïve approach, giving an import map with `./node_modules/…' URLs
([`../importmap.json`](../importmap.json)),
had resulted in seemingly successful imports.
However, all imports behaved as if their modules had `undefined`
as their default export.

