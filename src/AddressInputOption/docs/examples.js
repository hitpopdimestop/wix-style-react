export const basicExample = `
  <AddressInputOption mainLabel="main label" secondaryLabel="secondary label"/>
`;

export const optionLayout = `
  <Layout>
    <Cell>
      <AddressInputOption
        mainLabel="main label"
        optionLayout="single-line"
        secondaryLabel="single line layout"
      />
    </Cell>
    <Cell>
      <AddressInputOption
        optionLayout="double-line"
        mainLabel="main label"
        secondaryLabel="double line layout"
      />
    </Cell>
  </Layout>
`;

export const Affixes = `
  <Layout cols={1}>
    <AddressInputOption
      mainLabel="default behavior"
    />
    <AddressInputOption
      prefix={false}
      mainLabel="No prefix"
    />
    <AddressInputOption
      mainLabel="Text Affixes"
      suffix="suffix"
      prefix="prefix"
    />
  </Layout>;
`;

export const advancedExample = `
<DropdownLayout
  visible
  inContainer
  selectedId={0}
  options={[
    addressInputOptionBuilder({
      id: 0,
      secondaryLabel: 'secondary label 1',
      mainLabel: 'main label 1',
      prefix: <Icons.Toolbox />,
      suffix: "suffix",
    }),
    addressInputOptionBuilder({
      id: 1,
      secondaryLabel: 'secondary label 2',
      mainLabel: 'main label 2',
      optionLayout: 'double-line'
    }),
    {id: 2, value: 'label 3' },
    addressInputOptionBuilder({
      id: 3,
      secondaryLabel: 'secondary label 3',
      mainLabel: 'main label 3 - disabled',
      optionLayout: 'double-line',
      disabled: true,
    }),
  ]}
/>
`;
