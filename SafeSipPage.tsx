import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, PartyPopper } from "lucide-react";

export default function SafeSipPage() {
  const handleCheckout = async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <h1 className="text-5xl font-bold mb-4">SafeSip</h1>
        <p className="text-xl mb-6 max-w-xl mx-auto">
          Lock your drink. Own your party. SafeSip protects your beverage anywhere.
        </p>
        <Button onClick={handleCheckout} className="text-lg px-6 py-3">Buy Now</Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 max-w-6xl mx-auto">
        <Card className="text-center">
          <CardContent className="p-6">
            <Lock className="w-10 h-10 mx-auto text-blue-600" />
            <h2 className="text-xl font-semibold mt-4">Secure Locking</h2>
            <p className="mt-2 text-gray-600">Prevents tampering with any compatible bottle. Peace of mind at every event.</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <ShieldCheck className="w-10 h-10 mx-auto text-green-600" />
            <h2 className="text-xl font-semibold mt-4">Universal Fit</h2>
            <p className="mt-2 text-gray-600">Fits most standard glass or plastic bottles with compatible necks.</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <PartyPopper className="w-10 h-10 mx-auto text-pink-600" />
            <h2 className="text-xl font-semibold mt-4">Party Ready</h2>
            <p className="mt-2 text-gray-600">Stylish, lightweight, and easy to carry. Great for festivals, bars, and parties.</p>
          </CardContent>
        </Card>
      </section>

      <section className="py-20 px-4 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">What Users Say</h2>
        <p className="max-w-xl mx-auto text-gray-700 italic">
          "Finally, a way to protect my drink at parties. No more worries. Love the design too!"
        </p>
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Safe. Stay Sipping.</h2>
        <p className="mb-6">Get your SafeSip today and party without compromise.</p>
        <Button onClick={handleCheckout} className="text-lg px-6 py-3">Shop Now</Button>
      </section>
    </main>
  );
}
