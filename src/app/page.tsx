'use client'
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);

export default function Home() {
  return (
    <>
      <h2>Syncfusion React Document Editor Component</h2>
      <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/" enableToolbar={true}>
      </DocumentEditorContainerComponent>
    </>
  )
}