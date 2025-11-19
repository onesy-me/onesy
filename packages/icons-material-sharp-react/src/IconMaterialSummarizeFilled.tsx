import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSummarizeFilled = (props: IIcon) => {

  return (
    <Icon
      name='SummarizeFilled'

      short_name='Summarize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM120-120v-720h520l200 200v520H120Zm480-640v160h160L600-760Z"/>
    </Icon>
  );
};

IconMaterialSummarizeFilled.displayName = 'OnesyIconMaterialSummarizeFilled';

export default IconMaterialSummarizeFilled;
