# react-multi-provider
Allows for nesting of multiple of providers with out the sideways pyramid


## Instalation
`npm install react-multi-provider`

## Usage
```
<MultiProvider 
  providers={[
    <CustomProvider1>,
    <CustomProvider2>,
    <CustomProvider3>
  ]}>
  <Foo/>
</MultiProvider>
```