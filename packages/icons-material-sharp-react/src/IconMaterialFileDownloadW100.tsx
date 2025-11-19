import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileDownloadW100 = (props: IIcon) => {

  return (
    <Icon
      name='FileDownloadW100'

      short_name='FileDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15-3.1-3.1.5-.5 2.25 2.25v-8.8h.7v8.8l2.25-2.25.5.5Zm-6.7 3.7V15H6v3h12v-3h.7v3.7Z"/>
    </Icon>
  );
};

IconMaterialFileDownloadW100.displayName = 'OnesyIconMaterialFileDownloadW100';

export default IconMaterialFileDownloadW100;
